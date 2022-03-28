try:
    from tkinter import *
    from tkinter.ttk import *
    import webbrowser
except:
    print("A requirement is not met. This program requires: \n- tkinter\n- webbrowser\n- python 3")
class Link:
    def __init__(self, text, href, root, padding=[5, 5], ipadding=[0, 0]):
        self.tk = Label(root, text=text, cursor="hand2")
        self.tk.config(foreground="blue")
        self.tk.pack(padx=padding[0], pady=padding[1], ipadx=ipadding[0], ipady=ipadding[1])
        self.href = href
        self.tk.bind("<Button-1>", self.openlink)
    def openlink(self, e):
        self.tk.config(foreground="purple")
        webbrowser.open_new(self.href)
