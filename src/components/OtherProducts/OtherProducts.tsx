import styles from "./OtherProducts.module.css";

import caseImg from "../../assets/img/case-oculus.avif";
import earphonesImg from "../../assets/img/headphones-small.avif";
import cableImg from "../../assets/img/cable-oculus.avif";
import headsetImg from "../../assets/img/headphones-big.avif";

const products = [
  {
    id: 1,
    title: "Quest 2 Carrying case",
    price: "$49 USD",
    image: caseImg,
  },
  {
    id: 2,
    title: "Logitech G333 VR Gaming Earphones",
    price: "$50 USD",
    image: earphonesImg,
  },
  {
    id: 3,
    title: "Oculus Link Cable",
    price: "$79 USD",
    image: cableImg,
  },
  {
    id: 4,
    title: "Logitech G PRO Gaming Headset",
    price: "$100 USD",
    image: headsetImg,
  },
];

function OtherProducts() {
  return (
    <section className={styles.otherProducts}>
      <div className="container">
        <h1 className={styles.title}>Other products</h1>

        <p className={`additional-text ${styles.mainParagraph}`}>
          Enhance your experience with accessories designed for the Quest 2
        </p>

        <div className={styles.productsRows}>
          <div className={`${styles.row} ${styles.rowTop}`}>
            <ProductCard product={products[0]} />
            <ProductCard product={products[1]} />
          </div>

          <div className={`${styles.row} ${styles.rowBottom}`}>
            <ProductCard product={products[2]} />
            <ProductCard product={products[3]} />
          </div>
        </div>
      </div>
      <button className={`button-main ${styles.buttonLoad}`}>Load more</button>
    </section>
  );
}

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{product.title}</h3>

      <img
        className={styles.cardImage}
        src={product.image}
        alt={product.title}
        loading="lazy"
      />

      <div className={styles.cardBottom}>
        <span>{product.price}</span>

        <button className={styles.cartButton} type="button" aria-label="Add to cart">
          +
        </button>
      </div>
    </div>
  );
}

export default OtherProducts;