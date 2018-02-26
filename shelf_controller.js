module.exports={
    getShelf: (req,res)=>{
        const db = req.app.get('db');
        db.read_shelves()
            .then(shelf=>{res.send(shelf)
            })
            .catch((err)=>console.error(err)
            )
    },

    getBin: (req,res)=>{
        const db = req.app.get('db');
        db.read_bins([req.params.shelfid])
            .then(bins=>{res.send(bins)
            })
            .catch((err)=>console.error(err)
            )
    },

    getItems:(req,res)=>{
        const db = req.app.get('db');
        db.read_items()
            .then(items=>{res.send(items)
            })
            .catch((err)=>console.error(err)
            )
    },

    getItem: (req,res)=>{
        const db = req.app.get('db');
        db.read_item([req.params.binid])
            .then(item=>{res.send(item)
            })
            .catch((err)=>console.error(err)
            )
    },

    createItem:(req,res)=> {
        const db = req.app.get('db');
        db.create_item([req.params.binid, req.body.itemnm, req.body.itemprice])
        .then((item)=> {res.send(item)
        })
        .catch((err)=>console.error(err)
        )
    },

    updateItem:(req,res)=> {
        const db = req.app.get('db');
        db.update_item([req.params.binid, req.body.itemnm, req.body.itemprice])
        .then(item=> {res.send(item)
        })
        .catch((err)=>console.error(err)
        )
    },

    deleteItem:(req,res)=> {
        const db = req.app.get('db');
        db.delete_item([req.params.binid])
        .then(item=> {res.send(item)
        })
        .catch((err)=>console.error(err)
        )
    }
}