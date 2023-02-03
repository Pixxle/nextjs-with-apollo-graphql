export default function GetBaseUrl() {
    return process.env.NODE_ENV === "production"
      ? ""
      : "http://localhost:3000";
  }