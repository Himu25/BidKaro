import type { RequestHandler } from "@sveltejs/kit";
import { DateTime } from "luxon";
import { createItem } from "$services/queries/items/items";

export const post: RequestHandler = async ({ request, locals }) => {
  try {
    const data = await request.json();
console.log(data);

    const id = await createItem({
      name: data.name,
      description: data.description,  
      createdAt: DateTime.now(),
      endingAt: DateTime.now().plus({ seconds: data.duration }),
      imageUrl: data.imageUrl,
      ownerId: locals.session.userId,
      highestBidUserId: "",
      price: 0,
      views: 0,
      likes: 0,
      bids: 0,
      status: "",
    });

    return {
      status: 200,
      body: {
        id,
      },
    };
  } catch (error) {
    return {
      status: 500,
    };
  }
};
