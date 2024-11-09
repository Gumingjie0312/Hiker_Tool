with open("./snippets/提示词.txt", "r") as a:
    content = a.read()


list = {}

for i in content.split(","):
    i = i.replace('"', "")
    i = i.strip()
    list[i] = {
        "prefix": [i[0:3]],
        "body": [i],
        "description": "海阔视界"
    }

with open("./snippets/snippets.json", "w", encoding="utf-8") as b:
    b.write(str(list))
