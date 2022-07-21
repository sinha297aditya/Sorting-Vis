function Bubble()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"#e9bd17");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#dd3159");//Color update
                div_update(divs[j+1],div_sizes[j+1], "#dd3159");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#dd3159");//Height update
                div_update(divs[j+1],div_sizes[j+1], "#dd3159");//Height update
            }
            div_update(divs[j],div_sizes[j], "#38b0b7");//Color updat
        }
        div_update(divs[j],div_sizes[j], "#37ab20");//Color update
    }
    div_update(divs[0],div_sizes[0], "#37ab20");//Color update

    enable_buttons();
}