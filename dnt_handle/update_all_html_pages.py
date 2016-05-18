from os import listdir
from os.path import isfile, join



def replace_all(mypath, str1, str2):
    '''
    Condiction: mypath is the folder of all html pages.
    
    Replace str1 to str2 in all pages. (except for index.html)
    '''

    onlyfiles = [ f for f in listdir(mypath) if isfile(join(mypath,f)) ]
    onlyfiles.remove("index.html")

    for f in onlyfiles:
        f = mypath + f
        fr = open(f,"r")
        read = fr.read()
        read = read.replace(str1,str2)
        fr.close()
        fw = open(f,"w")
        fw.write(read)
        fw.close()    


if __name__ == "__main__":


    mypath = "E:/SilverEdge/skill_simulators/uploadedfiles/"
    str1 = '<area shape="rect" coords="165,603,255,625" href="darkavenger-pvp.html" target="_self">'
    str2 = '<area shape="rect" coords="165,603,255,625" href="darkavenger-pvp.html" target="_self">\n<area shape="rect" coords="166,673,255,695" href="ruina-pvp.html" target="_self">\n<area shape="rect" coords="260,673,349,695" href="defensio-pvp.html" target="_self">\n'
    replace_all(mypath, str1, str2)

