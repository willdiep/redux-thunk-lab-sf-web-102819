import React from 'react'

// function CatList({ catPics }) {
//   console.log('from CatList')
//   return catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
// }

class CatList extends React.Component {
  // listCats = () => {
  //   return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
  // }

  
  render() {
    const listCats = this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)

    console.log('from CatList')
    
    return (
      <div>
        {/* {this.listCats()} */}
        {listCats}
      </div>
    )
  }
}

export default CatList
