# 例题
## 第九章
### 第三道
某财务文件在制作时由于疏忽，把所有的单位错误地写成了美元，请通过程序完成以下功能：将该文件中所有单位为美元的地方换位人民币
```c
#include <stdio.h>
#include <string.h>
#define MAX 81
int main() {
    long pos;
    char *temp;
    FILE *fpsrc, *fptar;
    fpsrc = fopen("accounting.txt", "r");
    fptar = fopen("new.txt", "w");
    if (fpsrc == NULL || fptar == NULL) {
        printf("文件打开失败！");
        return -1;
    }
    char us[] = "US";
    char rmb[] = "RMB";
    char src[MAX];
    char tar[MAX];
    while (!feof(fpsrc)) {
        fgets(src, MAX, fpsrc);
        if ((temp = strstr(src, us)) != NULL) {
            memset(tar, 0, MAX * sizeof(char));
            strncpy(tar, src, temp - src);
            strcat(tar, rmb);
            strcat(tar, temp + strlen(us));
            strcpy(src, tar);
        }
        fputs(src, fptar);
    }
    fclose(fpsrc);
    fclose(fptar);
    return 0;
}
```
### 第四道
将大文件拆为小文件
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX 81
int main() {
    long pos;
    char *temp;
    FILE *fpsrc, *fptar;
    char head[] =
        "销售员编号，产品编号，产品名称，销售数量，销售单价，销售总额\n";
    char filename1[80] = "G:/codeOfc/zsy/chapter09/salelist.txt";
    char filename2[80];
    char src[MAX];
    if ((fpsrc = fopen(filename1, "r")) == NULL) {
        printf("文件打开失败！");
        return -1;
    }
    fgets(src, MAX, fpsrc);
    // fgets(src, MAX, fpsrc);
    while (!feof(fpsrc)) {

        fgets(src, MAX, fpsrc);
        printf("%s", src);
        memset(filename2, 0, 30 * sizeof(char));
        pos = strstr(src, "，") - src;
        strcpy(filename2, "G:/codeOfc/zsy/chapter09/");
        strncat(filename2, src, pos * sizeof(char));
        strcat(filename2, ".txt");
        if ((fptar = fopen(filename2, "w")) == NULL) {
            printf("无法创建文件%s", filename2);
            return -1;
        }
        fputs(head, fptar);
        fputs(src, fptar);
        fclose(fptar);
    }
    fclose(fpsrc);

    return 0;
}
```