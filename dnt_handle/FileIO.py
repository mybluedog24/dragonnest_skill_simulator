import csv
import codecs
import struct

def read_DNT_from_file(file_name):
    """
    (str) -> list of lists of data
    
    Precondition: File must be DNT file.
    
    Return a list of lists data read from file_name. The list is a list contains
    rows. Ex: [[row0], [row1], [row2]......]
    """
    
    f = open(file_name, "rb")
    
    # header : 10 bytes
    
    # DWORD dwNull
    # empty : 4 bytes
    f.read(4)
    
    # WORD wFieldNum
    # column#: 2 bytes
    byte = f.read(2)
    col = struct.unpack('<H', byte)[0]
    # print(col)
    
    # DWORD dwRecordNum
    # row#: 4 bytes
    byte = f.read(4)
    row = struct.unpack('<L', byte)[0]
    # print(row)


    # structure£º
    # WORD wTextLen         - string size: 2 bytes
    # char szText[wTextLen] - string: <wTextLen> bytes
    # BYTE dbFieldType      - string type: 1 byte
    # string type:
    #     1£ºstring
    #     2£ºboolean (32 bit integer)
    #     3£º32 bit integer
    #     4£ºfloat (devide 100)
    #     5£ºfloat
    
    whole_list = []
    
    title_line = ["_nRow"]
    
    types = [3]
    for i in range(col):
        
        byte = f.read(2)
        col_title_length = struct.unpack('<H', byte)[0]
        col_title = f.read(col_title_length)
        byte = f.read(1)
        col_type = struct.unpack('<B', byte)[0]
        types.append(col_type)
        title_line.append(str(col_title.decode('ascii')))
        
    whole_list.append(title_line)

    
    # data structure (per row):
    # DWORD dwPKID: 32 bit integer
    # string type:
    #    1: WORD wLen - 2 bytes
    #       char szText[wLen] - <wLen> bytes
    #    2: boolean (32 bit integer: 0 or 1) - 4 bytes
    #    3£º32 bit integer - 4 bytes
    #    4£ºfloat (devide 100) - 4 bytes
    #    5£ºfloat - 4 bytes
    
    for i in range(row): 
        line = []

        for j in range(col+1):
            
            case = types[j]
            temp = ""
            if case == 1:
                byte = f.read(2)
                string_length = struct.unpack('<H', byte)[0]
                if string_length > 0:
                    byte = f.read(string_length)
                    temp = byte.decode('euc-kr')#.encode('utf-8') #euc-kr           
                else:
                    temp = ""
                
            elif case == 2:
                byte = f.read(4)
                unsignedlong = struct.unpack('<L', byte)[0]
                temp = str(unsignedlong)
                
            elif case == 3:
                byte = f.read(4)
                signedlong = struct.unpack('<l', byte)[0]
                temp = str(signedlong)
                
            elif case == 4:
                byte = f.read(4)
                floatlong = struct.unpack('f', byte)[0]
                temp = str(floatlong)
                
            elif case == 5:
                byte = f.read(4)
                floatlong = struct.unpack('f', byte)[0]
                temp = str(floatlong)              
            else:
                byte = f.read(4)
                WTF = struct.unpack('<i', byte)[0]
                temp = str(WTF)
            line.append(temp)

        whole_list.append(line)

    f.close()
    
    return whole_list


def write_DNT_to_csv(file_name):
    """
    (str) -> none
    
    Write file_name dnt file to a csv file with the same name of file_name.
    """
    
    lis = read_DNT_from_file(file_name)
    
    with open(file_name[:-4] + ".csv", 'w', newline='') as fp:
        a = csv.writer(fp, delimiter=',')
        a.writerows(lis)
        
        
def write_to_csv_by_columns(file_name, lis):
    """
    (str, list of lists of data) -> none
    
    Write lis to file_name csv file. The lis is a list of columns.
    EX: [[col0], [col1], [col2]......]
    """
    
    if len(file_name) < 4:
        file_name += ".csv"
    elif file_name[-4:] != ".csv":
        file_name += ".csv"

    with codecs.open(file_name, 'w', 'utf-8') as fp:
        a = csv.writer(fp, delimiter=',')
        a.writerows(list(zip(*lis)))
        
        
def write_to_csv_by_rows(file_name, lis):
    """
    (str, list of lists of data) -> none
    
    Write lis to file_name csv file. The lis is a list of rows.
    EX: [[row0], [row1], [row2]......]
    """

    if len(file_name) < 4:
        file_name += ".csv"
    elif file_name[-4:] != ".csv":
        file_name += ".csv"
    
    with codecs.open(file_name, 'w', 'utf-8') as fp:
        a = csv.writer(fp, delimiter=',')
        a.writerows(lis)
        
        
def read_xml_from_file(uistringxml="uistring.xml"):
    """
    none -> none
    
    Return a string that is reading the uistring.xml that under the same 
    directory of this file.
    """
    
    ff = codecs.open(uistringxml, "r", "utf-8")
    f = ff.read()
    ff.close()
    return f