This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- All data about the doctors has been hard coded into `data/doctors.ts` located at the root of the project. This file is being served to the client through a call to `http://localhost:3000/api/doctors`

- The availability of slots for a specific doctor is specified by a green dot on the corresponding day "🟢" where slots are available. When a specific doctor is unavailable on a particular day the day is seletable but a message saying `No slots available` is shown

- If a doc is unavailable in general the profile is greyed out completely and booking appointments is not allowed

- To book an appointment just click on a available time slot and an alert box is shown with the message `Your appointment on ${selectedDay} at ${timeSlot} has been booked. Congratulations!`
