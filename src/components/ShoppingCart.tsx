import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import Product from "../types/product"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"

type ShoppingCartProps = {
  isOpen: boolean
  products: Product[]
}

export function ShoppingCart({ isOpen, products }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {
          products && 
          cartItems.map(item => (
            //@ts-ignore
            <CartItem key={item.id} {...item} products={products} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                if (products) {
                  const item = products.find(i => i.webshopId === cartItem.id)
                  const price = (item?.priceBeforeBonus !== undefined ? item?.priceBeforeBonus : item?.currentPrice)
                  return total + (price || 0) * cartItem.quantity
                }
                
                return 0
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
