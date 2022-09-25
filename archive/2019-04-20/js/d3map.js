(function() {
    var width = 600;
            var height = 500;

            // Create SVG
            var svg = d3.select( "#example" )
                .append( "svg" )
                .attr( "width", width )
                .attr( "height", height );

            // Append empty placeholder g element to the SVG
            // g will contain geometry elements
            var g = svg.append( "g" );

            // Projection
            var albersProjection = d3.geoAlbers()
                .scale( 95000 )
                .rotate( [90.1994,0] )
                .center( [0, 38.627] )
                .translate( [width/2,height/2] );
            
            // Path generator to project coordinates into positions
            var geoPath = d3.geoPath()
                .projection( albersProjection );
            
            // Define color to value arrays
            var ramp = ["#fbe6c5","#ee8a82","#c8586c","#9c3f5d","#70284a"];
            
            
            // generate map
            
            g.selectAll( "path" )
                .data(stl.features)
                .enter()
                .append( "path" )
                .attr( "fill", "lightgreen")
                .attr("id", "map")
                .attr( "stroke", "#333")
                .attr( "d", geoPath );
           
           var col = []
           
           function scale(tst, ramp){
                if (tst < .2) return ramp[0]
                else if (tst < .4) return ramp[1]
                else if (tst < .6) return ramp[2]
                else if (tst < .8) return ramp[3]
                else return ramp[4]
                }
            
            for (var i = 0, len = stl.features.length; i < len; i++){
                var tst = stl.features[i].properties.prp_nw;
                col.push(scale(tst, ramp));
            };
            
            for (var i = 0, len = stl.features.length; i < len; i++){
                d3.select("#map")
                .attr("fill", col[i])
                .attr("id", "done")
            };
})();