
#!/usr/bin/python
# -*- coding: utf-8 -*-

from rivescript import RiveScript


class Rive:
    def __init__(self):
        self.rive = RiveScript()
        self.rive.load_directory('./knowledge_base')
        self.rive.sort_replies()

    def reload(self):
        try:
            self.rive = RiveScript()
            self.rive.load_directory("./knowledge_base")
            self.rive.sort_replies()
        except Exception as e:
            # TODO: Implement logging
            return False
        return True

    def reply(self, user, text):
        return self.rive.reply(user, text)

    def set_sentence(self):
        pass

    def get_sentence(self):
        pass

    
