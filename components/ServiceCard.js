import Link from "next/link";

const ServiceCard = ({ href, imgSrc, title, description }) => (
  <div className="col pb-5 service-card">
    <Link href={href}>
      <div className="card card-outline-hover gap-3 align-items-center text-center p-5 h-100">
        <div className="icon-box">
          <img src={imgSrc} className="img-fluid" alt={title} />
        </div>
        <h4 className="text-color">{title}</h4>
        <p className="font-1 text-color-2">{description}</p>
      </div>
    </Link>
  </div>
);

export default ServiceCard;
