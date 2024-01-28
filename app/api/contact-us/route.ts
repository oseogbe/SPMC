import { NextResponse } from 'next/server'
import * as nodemailer from 'nodemailer'

export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json()
        const { firstName, lastName, email, phone, message } = body

        const transporter = nodemailer.createTransport({
            host: 'sariuspalmetum.com',
            port: 465,
            secure: true,
            auth: {
                user: 'contact@sariuspalmetum.com',
                pass: 'Wh+%HW8&+}LX',
            },
        })

        const mailOptions = {
            from: email,
            to: 'contact@sariuspalmetum.com',
            subject: 'SPMC Contact Form',
            text: `
                Name: ${firstName} ${lastName}\n
                Phone: ${phone}\n
                Message: ${message}
            `,
            // html: `
            //     <b>Thank you for choosing SPMC!</b>
            //     <br />
            //     <p>To complete registration, please click the following link to confirm your email address:</p>
            //     <br /><br />
            //     <p>Sarius Palmetum<p>
            // `,
        }

        const info = await transporter.sendMail(mailOptions)

        console.log('Email sent:', info)

        return NextResponse.json({ success: true, message: "Email sent" })
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({ success: false, error: "Internal server error" })
    }


}