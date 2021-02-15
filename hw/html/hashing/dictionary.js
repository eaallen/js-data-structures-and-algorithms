class Dictionary {
    // O(n)
    constructor(size) {
        this.size = this.isPrime(size || 13441)
        this._keys = new Array(this.size)
        this._values = new Array(this.size)
        this.limit = 0
    }

    // O(n)
    put(key, value) {
        if (this.limit >= this.size) throw 'Hash map is full'
        let hashed_idx = this.hash(key)

        // We know this is not a collision, else: handle collision 
        if (key === this._keys[hashed_idx]) {
            this._values[hashed_idx] = value
        } else {
            // handle collisions with quadratic approch 
            let square_idx = 1
            while (this._keys[hashed_idx] != null) {
                hashed_idx += Math.pow(square_idx, 2)
                square_idx++
            }

            // using the hashed key, place the key and value
            this._keys[hashed_idx] = key
            this._values[hashed_idx] = value
            this.limit++
        }
    }

    // O(n)
    get(key) {
        if (this.limit >= this.size) throw 'Hash table is full'

        let hashed_idx = this.hash(key) // possible collision
        let square_idx = 1

        // We know this is not infact a collision
        if (key === this._keys[hashed_idx]) {
            return this._values[hashed_idx]
        }
        // handling collisions 
        while (this._keys[hashed_idx] != key && square_idx < this.limit) {
            hashed_idx += Math.pow(square_idx, 2)
            square_idx++
        }
        return this._values[hashed_idx]
    }

    // O(n)
    hash(str) {
        if (Number.isInteger(str) || str.length === 0) {
            throw `Your input (${str}) must be a string`
        }
        let hash = 0
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i)
            hash = ((hash << this.size) - hash) + code
            hash = hash & hash
        }
        return hash % this.size
    }

    // secondHash() {}

    // O(n)
    isPrime(num) {
        // check for prime number
        let sqr = Math.sqrt(num)
        for (let i = 2; i <= sqr; i++) {
            if (!(num % i)) throw 'The size of the HashMap should be a Prime number'
        }
        return num
    }

    // O(n)
    entries() {
        let ents = []
        for (let i = 0; i < this._keys.length; i++) {
            if (this._keys[i]) {
                ents.push([this._keys[i], this._values[i]])
            }
        }
        return ents
    }

    // O(n)
    keys(){
        let ents = []
        for (let i = 0; i < this._keys.length; i++) {
            if (this._keys[i]) {
                ents.push(this._keys[i])
            }
        }
        return ents
    }

    // O(n)
    values(){
        let ents = []
        for (let i = 0; i < this._values.length; i++) {
            if (this._values[i]) {
                ents.push(this._values[i])
            }
        }
        return ents
    }
}

// let d = new Dictionary()


// const str = `1 And it came to pass that we had gathered together all manner of seeds of every kind, both of grain of
// every kind, and also of the seeds of fruit of every kind.
// 2 And it came to pass that while my father tarried in the wilderness he spake unto us, saying: Behold, I
// have dreamed a dream; or, in other words, I have seen a vision.
// 3 And behold, because of the thing which I have seen, I have reason to rejoice in the Lord because of Nephi
// and also of Sam; for I have reason to suppose that they, and also many of their seed, will be saved.
// 4 But behold, Laman and Lemuel, I fear exceedingly because of you; for behold, methought I saw in my dream,
// a dark and dreary wilderness.
// 5 And it came to pass that I saw a man, and he was dressed in a white robe; and he came and stood before me.
// 6 And it came to pass that he spake unto me, and bade me follow him.
// 7 And it came to pass that as I followed him I beheld myself that I was in a dark and dreary waste.
// 8 And after I had traveled for the space of many hours in darkness, I began to pray unto the Lord that he
// would have mercy on me, according to the multitude of his tender mercies.
// 9 And it came to pass after I had prayed unto the Lord I beheld a large and spacious field.
// 10 And it came to pass that I beheld a tree, whose fruit was desirable to make one happy.
// 11 And it came to pass that I did go forth and partake of the fruit thereof; and I beheld that it was most
// sweet, above all that I ever before tasted. Yea, and I beheld that the fruit thereof was white, to exceed all
// the whiteness that I had ever seen.
// 12 And as I partook of the fruit thereof it filled my soul with exceedingly great joy; wherefore, I began to
// be desirous that my family should partake of it also; for I knew that it was desirable above all other fruit.
// 13 And as I cast my eyes round about, that perhaps I might discover my family also, I beheld a river of
// water; and it ran along, and it was near the tree of which I was partaking the fruit.
// 14 And I looked to behold from whence it came; and I saw the head thereof a little way off; and at the head
// thereof I beheld your mother Sariah, and Sam, and Nephi; and they stood as if they knew not whither they should
// go.
// 15 And it came to pass that I beckoned unto them; and I also did say unto them with a loud voice that they
// should come unto me, and partake of the fruit, which was desirable above all other fruit.
// 16 And it came to pass that they did come unto me and partake of the fruit also.
// 17 And it came to pass that I was desirous that Laman and Lemuel should come and partake of the fruit also;
// wherefore, I cast mine eyes towards the head of the river, that perhaps I might see them.
// 18 And it came to pass that I saw them, but they would not come unto me and partake of the fruit.
// 19 And I beheld a rod of iron, and it extended along the bank of the river, and led to the tree by which I
// stood.
// 20 And I also beheld a strait and narrow path, which came along by the rod of iron, even to the tree by
// which I stood; and it also led by the head of the fountain, unto a large and spacious field, as if it had been a
// world.
// 21 And I saw numberless concourses of people, many of whom were pressing forward, that they might obtain the
// path which led unto the tree by which I stood.
// 22 And it came to pass that they did come forth, and commence in the path which led to the tree.
// 23 And it came to pass that there arose a mist of darkness; yea, even an exceedingly great mist of darkness,
// insomuch that they who had commenced in the path did lose their way, that they wandered off and were lost.
// 24 And it came to pass that I beheld others pressing forward, and they came forth and caught hold of the end
// of the rod of iron; and they did press forward through the mist of darkness, clinging to the rod of iron, even
// until they did come forth and partake of the fruit of the tree.
// 25 And after they had partaken of the fruit of the tree they did cast their eyes about as if they were
// ashamed.
// 26 And I also cast my eyes round about, and beheld, on the other side of the river of water, a great and
// spacious building; and it stood as it were in the air, high above the earth.
// 27 And it was filled with people, both old and young, both male and female; and their manner of dress was
// exceedingly fine; and they were in the attitude of mocking and pointing their fingers towards those who had come
// at and were partaking of the fruit.
// 28 And after they had tasted of the fruit they were ashamed, because of those that were scoffing at them;
// and they fell away into forbidden paths and were lost.
// 29 And now I, Nephi, do not speak all the words of my father.
// 30 But, to be short in writing, behold, he saw other multitudes pressing forward; and they came and caught
// hold of the end of the rod of iron; and they did press their way forward, continually holding fast to the rod of
// iron, until they came forth and fell down and partook of the fruit of the tree.
// 31 And he also saw other multitudes feeling their way towards that great and spacious building.
// 32 And it came to pass that many were drowned in the depths of the fountain; and many were lost from his
// view, wandering in strange roads.
// 33 And great was the multitude that did enter into that strange building. And after they did enter into that
// building they did point the finger of scorn at me and those that were partaking of the fruit also; but we heeded
// them not.
// 34 These are the words of my father: For as many as heeded them, had fallen away.
// 35 And Laman and Lemuel partook not of the fruit, said my father.
// 36 And it came to pass after my father had spoken all the words of his dream or vision, which were many, he
// said unto us, because of these things which he saw in a vision, he exceedingly feared for Laman and Lemuel; yea,
// he feared lest they should be cast off from the presence of the Lord.
// 37 And he did exhort them then with all the feeling of a tender parent, that they would hearken to his
// words, that perhaps the Lord would be merciful to them, and not cast them off; yea, my father did preach unto
// them.
// 38 And after he had preached unto them, and also prophesied unto them of many things, he bade them to keep
// the commandments of the Lord; and he did cease speaking unto them.`


// function getWordCounts(chapter) {
//     // console.log(chapter)
//     scriptureWords = [];
//     var currWord = "";

//     for (i = 0; i < chapter.length; i++) {
//         var chr = chapter[i];
//         if ((chr >= 'A' && chr <= 'Z') || (chr >= 'a' && chr <= 'z')) {
//             if (chapter[i - 1] != '<' && chapter[i + 1] != '>') {
//                 currWord += chr;
//             }
//         } else {
//             if (currWord.length > 0) {
//                 scriptureWords.push(currWord);
//                 currWord = "";
//             }
//         }
//         if (i === chapter.length - 1 && currWord.length > 0) {
//             scriptureWords.push(currWord);
//         }
//     }
//     return scriptureWords
// }

// function countWordOccurrence(array_words) {
//     // redo this cause i cant use a dictionary 
//     const distinct_words_count = new Dictionary()
//     for (let i = 0; i < array_words.length; i++) {
//         word = array_words[i]
//         // make the words lowercase
//         word = word.toLowerCase()
//         distinct_words_count.get(word)
//             ? distinct_words_count.put(word, distinct_words_count.get(word) + 1)
//             : distinct_words_count.put(word, 1)
//     }
//     return distinct_words_count.entries()
// }

// console.log(countWordOccurrence(getWordCounts(str)))














function hashCode(str) {
    var hash = 0, i, chr;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
