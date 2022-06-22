import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import Product from "../types/product"
import { formatCurrency } from "../utilities/formatCurrency"
import { getImage } from "../utilities/getImage"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps, products: Product[]) {
  const { removeFromCart } = useShoppingCart()
  if (products) {
    return null  
  }

  //@ts-ignore
  const product = products.find(i => i.webshopId === id)
  if (product == null) return null

  const price = product.priceBeforeBonus !== undefined ? product.priceBeforeBonus : product.currentPrice  

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={getImage(product.images)}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {product.title}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(price)}
        </div>
      </div>
      <div> {formatCurrency(price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(product.webshopId)}
      >
        &times;
      </Button>
    </Stack>
  )
}
