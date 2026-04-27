import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { Resend } from "resend";

let resendClient: Resend | null = null;

function getResend() {
  if (!resendClient) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error("RESEND_API_KEY is not set");
    }
    resendClient = new Resend(key);
  }
  return resendClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.get("/api/health", (req, res) => res.json({ status: "ok" }));

  // API Routes
  app.post("/api/contact", async (req, res) => {
    console.log("Contact API hit with body:", JSON.stringify(req.body));
    const { name, email, subject, message } = req.body;
    
    console.log("Contact form submission received:", { name, email, subject, message });

    try {
      const apiKey = process.env.RESEND_API_KEY;
      if (apiKey) {
        console.log("Attempting to send email via Resend...");
        const resend = getResend();
        const { data, error } = await resend.emails.send({
          from: "AS PRODUCTION <onboarding@resend.dev>",
          to: process.env.CONTACT_RECEIVER_EMAIL || "highlandhiper@gmail.com",
          subject: `Contact Form: ${subject}`,
          html: `
            <h1>New Contact Submission</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });

        if (error) {
          console.error("Resend specific error:", error);
          return res.status(500).json({ error: error.message });
        }

        console.log("Email sent successfully:", data);
        res.json({ success: true, message: "Email sent successfully" });
      } else {
        console.warn("RESEND_API_KEY is missing in environment variables.");
        res.json({ success: true, message: "Submission logged (RESEND_API_KEY not set)" });
      }
    } catch (error) {
      console.error("Critical failure in contact API:", error);
      res.status(500).json({ error: "Failed to process request" });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

  return app;
}

export const app = startServer();
