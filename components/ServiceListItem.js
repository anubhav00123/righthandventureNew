import Link from "next/link";
import React from "react";

const ServiceListItem = ({ href, name }) => {
  return (
    <>
      <li className="list-group-item border-0 p-0">
        <Link href={href}>
          <div className="d-flex flex-row gap-3 align-items-center">
            <div className="icon-box-2">
              <i className="fa-solid fa-arrow-right" />
            </div>
            <span className="text-color fs-5 fw-bold">{name}</span>
          </div>
        </Link>
      </li>
    </>
  );
};

export default ServiceListItem;
