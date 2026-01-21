import { useState } from "react";
import { format, isWeekend, parse } from "date-fns";
import ReCAPTCHA from "react-google-recaptcha";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export default function ScheduleInquiryForm() {
  const navigate = useNavigate();

  const [date, setDate] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleInitial: "",
    email: "",
    phoneNumber: "+63",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName" || name === "lastName") {
      setFormData({ ...formData, [name]: value.replace(/[^A-Za-z\s]/g, "") });
    } else if (name === "middleInitial") {
      setFormData({
        ...formData,
        middleInitial: value.replace(/[^A-Za-z]/g, "").slice(0, 2),
      });
    } else if (name === "phoneNumber") {
      if (value.startsWith("+63")) {
        const cleaned = value.replace(/\D/g, "").slice(2, 12);
        setFormData({ ...formData, phoneNumber: "+63" + cleaned });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDateSelect = (e) => {
    const selectedDate = new Date(e.target.value);
    if (isWeekend(selectedDate)) {
      toast.error("Please select a weekday (Mon–Fri)");
      return;
    }
    setDate(selectedDate);
  };

  // Helper for CORS-safe POST
  const safePost = async (payload) => {
    return await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Use no-cors to avoid preflight if necessary, but standard POST usually works if Content-Type is text/plain
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
  };

  const sendVerificationCode = async () => {
    if (!formData.email) return toast.error("Enter a valid email");
    setLoading(true);
    try {
      // For Google Scripts, sending as text/plain avoids CORS preflight errors
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ action: "send_code", email: formData.email }),
      });
      toast.success("Check your email for the code!");
    } catch (e) {
      toast.error("Error sending code");
    } finally {
      setLoading(false);
    }
  };

  const verifyCode = async () => {
    if (!verificationCode) return toast.error("Enter code");
    setLoading(true);
    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "verify_code",
          email: formData.email,
          code: verificationCode,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setIsVerified(true);
        toast.success("Email verified!");
      } else {
        toast.error("Invalid code");
      }
    } catch (e) {
      toast.error("Verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isVerified || !captchaValue || !date)
      return toast.error("Complete all steps");

    setLoading(true);
    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "submit",
          ...formData,
          date: format(date, "PPP"),
        }),
      });
      const result = await res.json();
      if (result.success) {
        toast.success("Submitted successfully!");
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (err) {
      toast.error("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <Toaster richColors position="top-right" />
      <Card className="max-w-lg mx-auto p-6 rounded-2xl shadow-lg bg-white">
        <CardContent>
          <h2 className="text-xl font-bold mb-4 text-center">
            Schedule an Inquiry
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <Input
                name="firstName"
                placeholder="First"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <Input
                name="lastName"
                placeholder="Last"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <Input
                name="middleInitial"
                placeholder="MI"
                value={formData.middleInitial}
                onChange={handleChange}
                required
              />
            </div>

            <Label>Email Verification</Label>
            <div className="flex gap-2">
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isVerified}
                required
              />
              <Button
                type="button"
                onClick={sendVerificationCode}
                disabled={isVerified || loading}
              >
                {isVerified ? "Verified" : "Send Code"}
              </Button>
            </div>

            {!isVerified && (
              <div className="flex gap-2">
                <Input
                  placeholder="Enter Code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={verifyCode}
                  disabled={loading}
                >
                  Verify
                </Button>
              </div>
            )}

            <Input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />

            <div className="grid grid-cols-2 gap-2">
              <Input type="date" onChange={handleDateSelect} required />
              <Input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex justify-center py-2">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={setCaptchaValue}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={!isVerified || !captchaValue || loading}
            >
              {loading ? "Processing..." : "Submit Inquiry"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
