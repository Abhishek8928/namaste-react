

export default function Chips() {
  return (
      <div style={{ paddingBottom: '2rem' }} className="filter-container">
          {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (item,index) {
                  return (
                      <>
                          <div key={index} className="chips chip-skeleton">{item.label}</div>
                      </>
                  )
              })
          }
      </div>
  )
}
