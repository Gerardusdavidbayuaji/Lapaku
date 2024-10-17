import { redirect } from "next/navigation";

import { auth } from "@clerk/nextjs/server";

import { fetchOrCreateCart, updateCart } from "@/utils/actions";
import CartItemsList from "@/components/cart/CartItemsList";
import SectionTitle from "@/components/global/SectionTitle";
import CartTotals from "@/components/cart/CartTotals";

async function CartPage() {
  const { userId } = auth();
  if (!userId) redirect("/");

  const cart = await fetchOrCreateCart({ userId });
  await updateCart(cart);

  if (cart.numItemsInCart === 0) {
    return <SectionTitle text="Empty cart" />;
  }

  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList cartItems={cart.cartItems} />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals cart={cart} />
        </div>
      </div>
    </>
  );
}

export default CartPage;
