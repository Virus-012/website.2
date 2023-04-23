const product_img=["img/product-01.jpg","img/product-02.jpg.webp","img/product-03.jpg.webp","img/product-04.jpg.webp","img/product-05.jpg.webp","img/product-06.jpg.webp","img/product-07.jpg.webp","img/product-08.jpg.webp","img/product-09.jpg.webp","img/product-10.jpg.webp","img/product-11.jpg.webp","img/product-12.jpg.webp","img/product-13.jpg.webp","img/product-14.jpg.webp","img/product-15.jpg.webp","img/product-16.jpg.webp"];
const product_name=["Esprit Ruffle Shirt","Herschel supply","Only Check Trouser","Classic Trench Coat","Front Pocket Jumper","Vintage Inspired Classic","Shirt in Stretch Cotton","Pieces Metallic Printed","Converse All Star Hi Plimsolls","Femme T-Shirt In Stripe","Herschel supply","Herschel supply","T-Shirt with Sleeve","Pretty Little Thing","Mini Silver Mesh Watch","Square Neck Back"];
const product_price=["$16.64","$35.31","$25.50","$75.00","$16.64","$35.31","$25.50","$25.50","$16.64","$35.31","$25.50","$75.00","$16.64","$35.31","$25.50","$75.00"];
let product_count=product_img.lenght;
for(let i=0; i<product_count;i++){
let code='<div class="col-lg-3 p-3">';
    code+='<div class="card">';
    code+='<img class="card-img-top" src='+product_img[i]+ 'alt="Esprit Ruffle Shirt">';
    code+='<div class="card-body">';
    code+='<h4 class="card-title">'+product_name[i]+'</h4>';
    code+='<p class="card-text">'+product_price[i]+'</p>}';
    code+='</div>';
    code+='</div>';
    code+='</div>';}

    document.getElementById('product').innerHTML=code