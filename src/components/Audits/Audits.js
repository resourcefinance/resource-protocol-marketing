import React from "react"
import "./Audits.css"

// images
import { getCloudinaryImagePath } from "../App/App"

// data
const hacken = {
    href: "/ReSourceNetwork_Hacken_Audit_Report.pdf",
    pngSrcName: "logos/hacken-logo-white_eqm3n9.png",
    webpSrcName: "logos/hacken-logo-white_g6pdv9.webp",
    altText: "hacken logo",
}

const ambisafe = {
    href: "https://ambisafe.com/",
    pngSrcName: "logos/ambisafe-logo-white_sww2ev.png",
    webpSrcName: "logos/ambisafe-logo-white_pncuge.webp",
    altText: "ambisafe logo",
}

const audits = [hacken, ambisafe]

export const Audits = () => {

    const renderAuditImages = () => {
        return audits.map((audit) => (
            <a
                key={audit.altText}
                className={"auditItem"}
                href={audit.href}
                target={"_blank"}
                rel={"noreferrer"}
            >
                <picture>
                    <source srcSet={getCloudinaryImagePath(audit.webpSrcName)} type={"image/webp"} />
                    <source srcSet={getCloudinaryImagePath(audit.pngSrcName)} type={"image/png"} />
                    <img src={getCloudinaryImagePath(audit.pngSrcName)} alt={audit.altText} />
                </picture>
            </a>
        ))
    }

    return (
        <section id={"audits"}>
            <h4> {"Audits"} </h4>
            <div id={"auditsItemsContainer"}>
                { renderAuditImages() }
            </div>
        </section>
    )
}

export default Audits
