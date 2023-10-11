

export default function FiltersHome() {
    return (
  <div className="flex justify-center space-x-4 mb-4">      
      <div className="flex flex-col items-center">
        <legend>Marcas</legend>
      <select>
          <option disabled>Filtrar por marca</option>
          {/* <option value="Antares">Antares</option>
          <option value="Patagonia">Patagonia</option>
          <option value="Corona">Corona</option>
          <option value="Brahma">Brahma</option>
          <option value="Quilmes">Quilmes</option>             */}
      </select>
      </div>

      <div>
        <legend> Marcas en orden alfabetico</legend>
      <select>
          <option disabled>Filtrar por orden alfabetico</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
      </select>
      </div>

  </div>
)
}