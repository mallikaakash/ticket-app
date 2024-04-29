import Ticket from "@/app/{models}/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const ticket = await Ticket.findByIdAndDelete(params.id);
    if (!ticket) {
      return NextResponse.notFound();
    }
    return NextResponse.json(
      { message: "Ticket deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const ticket = await Ticket.findOne({ _id: id });
    if (!ticket) {
      return NextResponse.notFound();
    }
    return NextResponse.json({ ticket }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
