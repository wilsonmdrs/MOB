import requests

class Search:
    def __init__(self):
        pass

    @classmethod
    def search_wikepedia(cls, _term):
        response = requests.get('https://en.wikipedia.org/w/api.php',
            params={
                'action': 'query',
                'format': 'json',
                'titles': _term,
                'prop': 'extracts',
                'exintro': True,
                'explaintext': True,
            }
        ).json()
        page = next(iter(response['query']['pages'].values()))
        print(page['extract'])
        return page['extract']

    @classmethod
    def getAnswer(cls, _term):
        try:
            response = cls.search_wikepedia(_term)
            if response:
                return response
            else:
                return "I'm sorry, I could not found an answer, let's talk about something different."
        except: 
            return "I'm sorry, I could not found an answer, let's talk about something different."