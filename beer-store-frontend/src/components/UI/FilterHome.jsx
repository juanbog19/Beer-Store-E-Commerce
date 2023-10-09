

export default function FiltersHome() {
    return (
  <div>      
      <div>
        <legend>Filter By Brands</legend>
      <select>
          <option disabled>Filter By Brands</option>
          <option value="Antares">Antares</option>
          <option value="Patagonia">Patagonia</option>
          <option value="Corona">Corona</option>
          <option value="Brahma">Brahma</option>
          <option value="Quilmes">Quilmes</option>            
      </select>
      </div>

      <div>
        <legend> Filter by Order Alphabetic</legend>
      <select>
          <option disabled>Order by Alphabetic</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
      </select>
      </div>
      
  </div>
)
}