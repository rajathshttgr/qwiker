"use strict";

class Qwiker {
  constructor(defaultConfig = {}) {
    this.defaults = defaultConfig;
  }

  async request(config) {
    const finalConfig = { ...this.defaults, ...config };

    const finalURL = finalConfig.url.startsWith("http")
      ? finalConfig.url
      : (finalConfig.baseURL || "") + finalConfig.url;

    try {
      const response = await fetch(finalURL, {
        method: finalConfig.method || "GET",
        headers: finalConfig.headers || {},
        body: finalConfig.body ? JSON.stringify(finalConfig.body) : undefined,
      });

      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  get(url) {
    return this.request({ method: "GET", url });
  }

  post(url, body) {
    return this.request({ method: "POST", url, body });
  }

  static create(defaultConfig) {
    return new Qwiker(defaultConfig);
  }
}

export default Qwiker;
