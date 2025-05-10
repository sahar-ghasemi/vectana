interface RegisterUserData {
  mobile: string;
  name?: string;
  email?: string;
}

export const userService = {
  async getReferralLink(): Promise<string> {
    try {
      const response = await fetch("/api/user/referral");
      if (!response.ok) {
        throw new Error("Failed to fetch referral link");
      }
      const data = await response.json();

      if (!data.referralCode) {
        throw new Error("No referral code found");
      }

      // ساخت لینک کامل با دامنه سایت
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;
      return `${baseUrl}/register?ref=${data.referralCode}`;
    } catch (error) {
      console.error("Error getting referral link:", error);
      throw error;
    }
  },

  // برای زمانی که کاربر با لینک معرفی ثبت نام می‌کنه
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
        throw new Error("Failed to register with referral");
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
