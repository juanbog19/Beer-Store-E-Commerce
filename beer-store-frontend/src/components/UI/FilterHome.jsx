

export default function Filters() {
    return (
  <div>      
      <div>
      <select>
          <option disabled>Filter By Brands</option>
          <option value="Antares">Antares</option>
          <option value="Patagonia">Patagonia</option>
          <option value="Corona">Corona</option>
          <option value="Brahma">Brahma</option>
          <option value="Quilmes">Quilmes</option>            
      </select>

      <select>
          <option disabled>Order by Alphabetic</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
      </select>
      </div>
  </div>
)
}