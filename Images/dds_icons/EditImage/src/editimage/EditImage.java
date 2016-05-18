/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package editimage;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Rectangle;
import java.awt.image.BufferedImage;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.HashSet;
import javax.imageio.ImageIO;
import java.util.Arrays;

/**
 *
 * @author Frank Chen
 */
public class EditImage {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws IOException {
        
        /////////////////////////////////////
        // output all icons under the folder: skills/allicons/
        // output combined watermark.png, background.png
        // Precondiction: all files must have name skilliconxx.png,skilliconxx_b.png
        // Precondiction: the number in file name is the order of the iconindex, so don't change it, leave it the same as original file name
        outputAllImagesToFiles();
        ////////////////////////////////////
        
        
        ///////////////////////////////////
        // change the name files in skills/allicons/, and copy them in skills/allicons/done/
        // Precondiction: skill_info_csv has all csv files for all classes
        String dntpath = "skill_info_csv";
        File csvfolder = new File(dntpath);
        File[] listOfcsv = csvfolder.listFiles();
        
        String imgpath = "skills/allicons";
        File folder = new File(imgpath);
        File[] listOfimg = folder.listFiles();
        
        for (File csv : listOfcsv){
            
            if(!csv.isFile()){
                System.out.println(csv + " is not a file");
                continue;
            }
            System.out.println("===============================================");
            System.out.println("===============================================");
            System.out.println("===============================================");
            System.out.println("===============================================");
            System.out.println(csv.getName());
            ArrayList<String[]> csvcontent = readIconIndexFromCsv(dntpath + "/" + csv.getName());

            for(String[] tuple : csvcontent){
                String img = imgpath + "/" + tuple[1] + ".jpg";
                String newimg = imgpath + "/done/" + tuple[1] + "temp.jpg";
                String imgoff = imgpath + "/" + tuple[1] + "_off.jpg";
                String newimgoff = imgpath + "/done/" + tuple[1] + "temp_off.jpg";
                copyFile(img, newimg);
                copyFile(imgoff, newimgoff);
                reNameFile(newimg, imgpath + "/done/" + tuple[0] + ".jpg");
                reNameFile(newimgoff, imgpath + "/done/" + tuple[0] + "_off.jpg");

            }
            
        }
        /////////////////////////////////////


    }
    
    private static void copyFile(String oldd, String newd){
        InputStream inStream = null;
    	OutputStream outStream = null;
    	try{
 
    	    File file1 =new File(oldd);
    	    File file2 =new File(newd);
 
    	    inStream = new FileInputStream(file1);
    	    outStream = new FileOutputStream(file2); // for override file content
    	    //outStream = new FileOutputStream(file2,<strong>true</strong>); // for append file content
 
    	    byte[] buffer = new byte[1024];
 
    	    int length;
    	    while ((length = inStream.read(buffer)) > 0){
    	    	outStream.write(buffer, 0, length);
    	    }
 
    	    if (inStream != null)inStream.close();
    	    if (outStream != null)outStream.close();
 
    	    
    	}catch(IOException e){
            System.out.println(oldd + " not copied");
            e.printStackTrace();
    	}
    }
    
    private static ArrayList<BufferedImage> cropImages(BufferedImage src){
        
        ArrayList<BufferedImage> list = new ArrayList<>();
        int size = 50;
        int y = 0;
        int x = 0;
        int maxwidth = src.getWidth();
        int maxheight = src.getHeight();
        int count = 0;
        while(y+size < maxheight){
            while(x+size < maxwidth){
                BufferedImage img = cropImage(src, new Rectangle(x,y,size,size));
                list.add(img);
                x += size;
            }
            x = 0;
            y += size;
        }
       return list; 
    }
    
    private static BufferedImage cropImage(BufferedImage src, Rectangle rect) {
        BufferedImage dest = src.getSubimage(rect.x, rect.y, rect.width, rect.height);
        return dest; 
   }
    
    private static BufferedImage combinedImage(String f1, String f2) throws IOException
    {
        BufferedImage img1 = ImageIO.read(new File(f1));
        BufferedImage img2 = ImageIO.read(new File(f2));
        BufferedImage wm = ImageIO.read(new File("watermark.png"));
        
        int size = 50;
       
        BufferedImage bufferedImage = new BufferedImage(size,size, BufferedImage.TYPE_INT_RGB);
 
        Graphics g = bufferedImage.getGraphics();
        
        
        g.drawImage(img2, 0, 0, size, size, null);
        g.drawImage(img1, 0, 0, size, size, null);
        g.drawImage(wm, 0, 0, size, size, null);

        g.dispose();
        
        return bufferedImage;
    }
    
    private static BufferedImage combinedImage(BufferedImage img1, String f2) throws IOException
    {
        BufferedImage img2 = ImageIO.read(new File(f2));
        BufferedImage wm = ImageIO.read(new File("watermark.png"));
        
        int size = 50;
       
        BufferedImage bufferedImage = new BufferedImage(size,size, BufferedImage.TYPE_INT_RGB);
 
        Graphics g = bufferedImage.getGraphics();
        
        
        g.drawImage(img1, 0, 0, size, size, null);
        g.drawImage(img2, 0, 0, size, size, null);
        g.drawImage(wm, 0, 0, size, size, null);

        g.dispose();
        
        return bufferedImage;
    }
    
    private static ArrayList<String[]> readIconIndexFromCsv(String csvFile){
        
        ArrayList<String> list = new ArrayList<>();
        BufferedReader br = null;
        //String line = "";
        String csvSplitBy = ",";
        
        try {
 
		br = new BufferedReader(new FileReader(csvFile));
                String line = br.readLine();
		while ((line = br.readLine()) != null) {
 
		        // use comma as separator
                        //System.out.println("line: " + line);
			String[] country = line.split(csvSplitBy);
                        //System.out.println("list: " + Arrays.toString(country));
                        //String[] aa = {country[1], country[country.length-1]};
                        /////////////////////////////////////////////
                        // 41 is the index of IconImage
                        // changed on July 22 2015 has not been tested yet
                        ////////////////////////////////////////////
                        String tuple = country[1] + "=A=A=A=A=A=" + country[country.length-2];
                        list.add(tuple);
                        
                        //System.out.println(line);
                        //System.out.println("size: " + country.length);
                        //System.out.println(country[1] + " === " + country[country.length-1]);
 
		}
 
	} catch (FileNotFoundException e) {
		e.printStackTrace();
	} catch (IOException e) {
		e.printStackTrace();
	} finally {
		if (br != null) {
			try {
				br.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

        //list.remove(0);
        HashSet<String> set = new HashSet<>(list);
        //new HashSet<String[]>(list);
        ArrayList<String[]> newlist = new ArrayList<>( );
	//System.out.println("Done");
        for(String str : set){
            newlist.add(str.split("=A=A=A=A=A="));
        }
        //for(int i=0; i < newlist.size(); i++){
        //    System.out.println(newlist.get(i)[0] + " === " + newlist.get(i)[1]);
        //}
        return newlist;
        
    }
    
    
    private static void reNameFile(String oldname, String newname){

        File oldfile = new File(oldname);
  
 
        if(!oldfile.exists())
        {
  
            System.out.println("File " + oldname + " or directory does not exist.");
  
            return;

        }
 

        File newfile = new File(newname);
        boolean Rename = oldfile.renameTo(newfile);
  

        if(!Rename)
        {

            System.out.println(oldname + " : " + newname);

            return;
  
        }

    }
    
    private static void outputAllImagesToFiles() throws IOException{
        File folder = new File("skills");
        File[] listOfFiles = folder.listFiles();

        for (File file : listOfFiles) {
            
            if(!file.isFile())
                continue;
            
            String dir = "skills/allicons/";
            String name = file.getName();
            int i = 0;
            boolean isOff = false;
            switch (name){
                case "skillicon01.png":
                    i = 0;
                    break;
                case "skillicon01_b.png":
                    i = 0;
                    isOff = true;
                    break;
                case "skillicon02.png":
                    i = 200;
                    break;
                case "skillicon02_b.png":
                    i = 200;
                    isOff = true;
                    break;
                case "skillicon03.png":
                    i = 400;
                    break;
                case "skillicon03_b.png":
                    i = 400;
                    isOff = true;
                    break;
                case "skillicon04.png":
                    i = 600;
                    break;
                case "skillicon04_b.png":
                    i = 600;
                    isOff = true;
                    break;
                case "skillicon08.png":
                    i = 1400;
                    break;
                case "skillicon08_b.png":
                    i = 1400;
                    isOff = true;
                    break;
                case "skillicon09.png":
                    i = 1600;
                    break;
                case "skillicon09_b.png":
                    i = 1600;
                    isOff = true;
                    break;
                case "skillicon10.png":
                    i = 1800;
                    break;
                case "skillicon10_b.png":
                    i = 1800;
                    isOff = true;
                    break;
                case "skillicon11.png":
                    i = 2000;
                    break;
                case "skillicon11_b.png":
                    i = 2000;
                    isOff = true;
                    break;
                case "skillicon13.png":
                    i = 2400;
                    break;
                case "skillicon13_b.png":
                    i = 2400;
                    isOff = true;
                    break;
            }
            
            BufferedImage img = ImageIO.read(file);
            ArrayList<BufferedImage> list = cropImages(img);
            for(int j = i; j < list.size()+i; j++){
                String filename;
                if(isOff){
                    filename = j + "_off.jpg";
                }else {
                    filename = j + ".jpg";
                }
                File saveimg = new File(dir + filename);
                BufferedImage image = combinedImage(list.get(j-i), "background.png");
                ImageIO.write(image, "jpg", saveimg);
            }
                
        }
    }

}
