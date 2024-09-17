// import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["maycry@gmx.de", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

/* 
// import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  //
  if (req.method === "POST") {
    try {
      const body = await req.json();
      const { email, subject, message } = body;
      if (!email || !subject || !message) {
        return new Response(
          JSON.stringify({
            error: "All fields are required",
            missingFields: { email, subject, message },
          }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      // Weitere Verarbeitung
      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: ["maycry@gmx.de", email],
        subject: subject,
        react: (
          <>
            <h1>{subject}</h1>
            <p>Thank you for contacting us!</p>
            <p>New Message submitted:</p>
            <p>{message}</p>
          </>
        ),
      });

      if (error) {
        return new Response(JSON.stringify({ error }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
      //Erfolgreiche Antwort
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return new Response("Invalid JSON", { status: 400 });
    }
  }
}

*/
