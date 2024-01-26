function Blog() {
    function king(...a){
        let sum=0;
        for (let index = 0; index < a.length; index++) {
            sum+=a[index];
        }
        return sum;
    }
    let a=[4,3,2,1];

    let sorta=a.sort((a,b)=>a-b); 
    let b=[4,5,6,7,8];
    let bb=b.filter((e)=>e>4);

    let combine=[...a,...b];

    let arr=[1,2,3,4,5];
    let arr2=arr.map((e)=>e*2);

    let myarr=[...arr,6,7,8,9,10];

    return (
        <>
        <h1>{sorta}</h1>
        <h1>{king(1,2,3,50)}</h1>

        <h2>{combine}</h2>
        <p>{bb}</p>

        <h3>{myarr}</h3>  
        <p>{arr2}</p>      
        </>
    );
}
export default Blog;