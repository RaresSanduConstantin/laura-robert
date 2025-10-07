import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api


export async function POST(request: any) {
    console.log("Request received at /api/contact")
   const responseData = await request.json()
   console.log(responseData)

    const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
    const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
    const additionalEmail = process.env.NEXT_PUBLIC_SECOND_EMAIL;

    console.log("dealing with request")
    const name = responseData.name
    const status = responseData.status
    const numberOfPersons = responseData.numberOfPersons
    const song = responseData.song

    if (!name || !status) {
        return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }





    // create transporter object
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: username,
          pass: password,
        },
      });

    try {
        const recipients = [myEmail, additionalEmail].join(',');
        const mail = await transporter.sendMail({
            from: username,
            to: recipients,
            // replyTo: email,
            subject: `Invitatul/a ${name} a răspuns la invitație`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                  <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <h1 style="color: #2c3e50; text-align: center; margin-bottom: 30px; font-size: 24px;">
                      Răspuns la Invitație 💌
                    </h1>
                    
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                      <h2 style="color: #34495e; margin: 0 0 15px 0; font-size: 18px;">Detalii Invitat</h2>
                      
                      <div style="margin-bottom: 15px;">
                        <strong style="color: #2c3e50; display: inline-block; width: 120px;">Nume:</strong>
                        <span style="color: #555;">${name}</span>
                      </div>
                      
                      <div style="margin-bottom: 15px;">
                        <strong style="color: #2c3e50; display: inline-block; width: 120px;">Status:</strong>
                        <span style="padding: 4px 12px; border-radius: 20px; color: white; font-weight: bold; ${status === 'accept' ? 'background-color: #27ae60;' : status === 'decline' ? 'background-color: #e74c3c;' : 'background-color: #f39c12;'}">${status === 'accept' ? 'Acceptă 🚀' : status === 'decline' ? 'Refuză 💩' : status}</span>
                      </div>
                      
                      ${numberOfPersons ? `
                      <div style="margin-bottom: 15px;">
                        <strong style="color: #2c3e50; display: inline-block; width: 120px;">Persoane:</strong>
                        <span style="color: #555;">${numberOfPersons}</span>
                      </div>
                      ` : ''}
                      
                      ${song ? `
                      <div style="margin-bottom: 15px;">
                        <strong style="color: #2c3e50; display: inline-block; width: 120px;">Melodie:</strong>
                        <span style="color: #555; font-style: italic;">🎵 ${song}</span>
                      </div>
                      ` : ''}
                    </div>
                    
                    <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #ecf0f1; border-radius: 8px;">
                      <p style="color: #7f8c8d; margin: 0; font-size: 14px;">
                        Acest email a fost generat automat din formularul de invitație
                      </p>
                    </div>
                  </div>
                </div>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" }, { status: 200 })

    } catch (error) {
        console.log(error)
        NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 })
    }


}