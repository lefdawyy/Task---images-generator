var b = document.getElementById("bt");
var i = document.getElementById("pic");
var j=0;
let arr=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhYucjIkL2N-OWB7iOHcmhgzp557eoeN_IS0dUki9gROZ0KUAiXFk-WGcoguK3zrPqEg&usqp=CAU","https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg","https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg","https://media.istockphoto.com/photos/photo-depicting-the-person-who-focuses-on-the-target-picture-id1249041775?b=1&k=20&m=1249041775&s=170667a&w=0&h=Pt6ltIPqpMrceX3FCtAEg69BjzrRJv4ZWh0n5rr3Uqs=","https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" ];
function ShowPic(arr)
{
    
    i.src=arr[j];
    j++;
    if(j==arr.length){j=0;};
}