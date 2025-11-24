export async function POST(req: Request) {
  const body = await req.json();
  return Response.json({
    message: "Booking confirmed",
    booking: {
      tutor: body.tutor,
      student: body.name,
      email: body.email,
      sessionDate: body.date,
    },
  });
}
