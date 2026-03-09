function B(){
    const containerStyle ={border: '1px solid grey', padding:'10px'}

    return(
        <div style={containerStyle}>
            <h3 style={{ color:"red", textAlign:"center"}}>----B----</h3>
            <p style={{ backgroundColor:'lightblue', border:'1px solide red', padding:'10px'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quia veniam aperiam saepe minima odio, 
                aliquam magnam, id soluta inventore temporibus voluptates assumenda fugit voluptatem quas deserunt 
                placeat exercitationem. Cum!
            </p>

        </div>
    )

}

export default B
// inline style - by using style prop