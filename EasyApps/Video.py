try:
    from tkinter import *
    from tkinter.ttk import *
    from tkVideoPlayer import TkinterVideo
except:
    print("A requirement is not met. This program requires: \n- tkinter\n- tkVideoPlayer\n- python 3")
print("WARNING: This module may not work on slower computers. We recommend you have ethernet or very strong WiFi")
class Video:
    def __init__(self, src, root, autoplay=False):
        self.tk = TkinterVideo(master=root, scaled=True, pre_load=False)
        self.tk.load(src)
        self.tk.pack(expand=True, fill="both")
        if autoplay == True:
            self.tk.play()
        self.tk.pack()
    def play(self):
        self.tk.play()
    def pause(self):
        self.tk.pause()
