


// set the colors of the layout by the colors of the background set by the user

// Load the background
const img = new Image()

img.src = rawUrl

img.onload = () => {
            
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        canvas.width = 50  //                                  👈 Draw the image (in hidden canvas)
        canvas.height = 50
        ctx.drawImage(img, 0, 0, 50, 50)

        
        const { data } = ctx.getImageData(0, 0, 50, 50)
        let rSum = 0, gSum = 0, bSum = 0  //                   👈 Get pixel values
        const numPixels = 50 * 50


    
        for (let i = 0; i < numPixels; i++) {
            const idx = i * 4;
            rSum += data[idx];
            gSum += data[idx + 1]; //                          👈 Avg the colors
            bSum += data[idx + 2];
        }
        const r = Math.round(rSum / numPixels)
        const g = Math.round(gSum / numPixels)
        const b = Math.round(bSum / numPixels)

                
        // But then..

        // We found out that the colors look ugly.. 😭
               
        let [h, s, l] = rgbToHsl(r, g, b)



        // If the color is too gray..
        if (s < 0.1) {             
            
            // we add..                        
            h = 208 // soft blue
        
        }
            
        const base = {
            h: h,
            s: 50, // Colors set not to be too dull or too bright..
        };


        // If we got a color that is "kind of" bright..
        if (l >= 0.5) {             

            // Light Theme:
            base.l = 90; // Set brightness UP. All the way to 90%.

        } else { 
           
            // Dark Theme:
            base.l = 40 // Set brightness to no less than 40%.
        
        }  


        // Final color assignment:
        
        return {

            // Sidebar
            
            //                                            A bit Brighter
            //
            //                                        (for "layered" effect)
            //                                              👇👇👇 
            sidebar: `hsla(${base.h}, ${base.s}%, ${base.l}%, 0.9)`,
                                           
            
            // Headers

            //                                                            A bit Brighter
            //
            //                                                        (for "layered" effect)            
            //                                                               👇👇👇
            header: `hsla(${base.h}, ${base.s}%, ${Math.min(base.l + 5, 95)}%, 0.95)`,


            
            // Borders

            //                Lower Strength                 Much Lower Brightness
            //  
            //                (to blend nice)                 (to be VERY visible)
            //                     👇👇👇                          👇👇👇
            border: `hsla(${base.h}, 40%, ${base.l >= 50 ? 75 : 35}%, 0.15)`,


            isDark: base.l >= 50,
        };
        
        

    
}






function rgbToHsl(r g, b) {return (r,g,b))