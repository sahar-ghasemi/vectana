import { validateEmail, validateMobile } from "@/lib/utils";

export function generateReferralCode(): string {
  const prefix = "vectana123";
  const randomNum = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");
  return `${prefix}${randomNum}`;
}

interface RegisterUserData {
  name: string;
  lastName?: string;
  mobile: string;
  email: string;
  referralCode?: string;
}

interface UserResponse {
  id: string;
  name: string;
  email: string;
  mobile: string;
  referralCode: string;
  remainingFreeRequest: number;
}

export const userService = {
  async register(userData: RegisterUserData): Promise<UserResponse> {
    try {
      // Validate data
      if (!validateMobile(userData.mobile)) {
        throw new Error("فرمت شماره موبایل نامعتبر است");
      }
      if (!validateEmail(userData.email)) {
        throw new Error("فرمت ایمیل نامعتبر است");
      }

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "خطا در ثبت نام");
      }

      return await response.json();
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  async getReferralLink(): Promise<string> {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (!user.referralCode) {
        throw new Error("کد معرف یافت نشد");
      }
      return `${window.location.origin}/signup?ref=${user.referralCode}`;
    } catch (error) {
      console.error("Error getting referral link:", error);
      throw error;
    }
  },

  async registerWithReferral(referralCode: string, userData: RegisterUserData) {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...userData,
          referralCode,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "خطا در ثبت نام");
      }

      return await response.json();
    } catch (error) {
      console.error("Error registering with referral:", error);
      throw error;
    }
  },

  // برای بررسی اعتبار لینک معرفی
  async validateReferralCode(code: string): Promise<boolean> {
    try {
      const response = await fetch(`/api/user/validate-referral?code=${code}`);
      if (!response.ok) {
        return false;
      }
      const data = await response.json();
      return data.isValid;
    } catch (error) {
      console.error("Error validating referral code:", error);
      return false;
    }
  },

  // Add other user-related services here
  // Example:
  // async updateProfile(data: UpdateProfileData) { ... }
  // async getProfile() { ... }
  // async updateSettings(settings: UserSettings) { ... }
};
