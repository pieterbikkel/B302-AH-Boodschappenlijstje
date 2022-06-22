import { Col, Row } from "react-bootstrap"
import ProductCard from "../components/ProductCard"

//@ts-ignore
export function Home({products}) {
  return (
    <>
        <Row md={2} xs={1} lg={3} className="g-3">
          {
          products ?
          //@ts-ignore
          products.map(product => (
            <Col key={product.webshopId}>
              <ProductCard product={product} />
            </Col>
          ))
          : <h1>Start met zoeken</h1>
          }
        </Row>
    </>
  )
}
