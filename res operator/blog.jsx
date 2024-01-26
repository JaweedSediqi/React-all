function Blog() {
    function king(...a){
        let sum=0;
        for (let index = 0; index < a.length; index++) {
            sum+=a[index];
        }
        return sum;
    }
    let a=[1,2,3,4];
    let b=[4,5,6,7,8];
    let combine=[...a,...b];

    let arr=[1,2,3,4,5];
    let myarr=[...arr,6,7,8,9,10];

    return (
        <>
        <h1>{king(1,2,3,50)}</h1>

        <h2>{combine}</h2>

        <h3>{myarr}</h3>        
        </>
    );
}
export default Blog;