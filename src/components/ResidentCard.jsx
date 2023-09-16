import { useEffect } from "react"
import useFech from "../hooks/useFech"


const ResidentCard = ({ url}) => {

    const [ resident, getResident ] = useFech(url)

    useEffect(() => {
        getResident()
    }, [])

  return (
    <article className="resident">
        <header className="resident_header">
            <img className="resident_image" src={resident?.image} alt="" />
            <div    className="resident_status">
                <span className={`resident_status_circle ${resident?.status}`}></span>
                <span className="resident_status_value">{resident?.status}</span>
            </div>
        </header>
        <section className="resident_body">
            <h3 className="resident_name">{resident?.name}</h3>
            <hr className="resident_separator" />
            <ul className="resident_list">
                <li className="resident_item"><span className="resident_label">Specie</span><span className="resident_value">{resident?.species}</span></li>
                <li className="resident_item"><span className="resident_label">Origin</span><span className="resident_value">{resident?.origin.name}</span></li>
                <li className="resident_item"><span className="resident_label">Episodes where appear</span><span className="resident_value">{resident?.episode.length}</span></li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentCard