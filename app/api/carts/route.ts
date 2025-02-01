import { carts } from "../db";

export async function GET() {
   return Response.json(carts); 
}