Cryptography Fundamentals
=========================

Defintion
---------

In present and past it is and always has been important for messages to be
transmitted securely and without the danger of information disclosure.
To meet these requirements, two main technique have emerged:

One technique
is called steganography. This discipline focuses on hiding the transmission
of messages. An example for this can be found in the past: To hide a message,
one used to shave off all hairs of a messenger. Then, the message was tattooed
on the skin. After a while, when the hair grew back, the messenger was sent to
the receiver. Border controls didn't notice this kind of message transmission
at the beginning, but after a while, the controls were informed to check
if a person was transmitting that kind of message. It was genious to covertly
transmit a message, but as soon as the message was discovered, the information
was disclosed. As a result, the message itself should have some protection, so
that only the desired receiver could read it. This was the point in time when
cryptography was born.

Cryptography is the art of encrypting a message so that only receivers with
specific knowledge can obtain the plaintext. The first steps in cryptography
were simple so called substitution ciphers, when some symbols in an alphabet
were switched or rotated.

Imagine the following message:

_attack at dawn_

If one substituted all "a"s with a "z" and all "t"s with an "e", the message
would look like this:

_zeezck ze dzwn_

The message immediately becomes unreadable for someone who doesn't know
about the underlying subsitution. This was, when cryptanalysis comes in:
If one looks at the text, one could for example analyze the frequency of
some specific letters, in this example "z" and "e". The most common letters
in the English alphabet are "e" and "a". One could now try to substitute
the letter "z" with "e". The outcome would be

_aeeack ae dawn_

If one can't guess that the message is _attack at dawn_, one could continue
using cryptanalysis. Since substituting "e" with commonly used letters fails,
one could analyze two letter chains. One of the most common used two letter
combinations with "a" is "at" (as one could have guessed when seeing "ae").
After substituting "e" with "t", the original message is revealed.

_attack at dawn_

Soon, this procedure also became quite insecure and cryptographers tried to
find new ways to encrypt their messages. It was a gift for them when
computers became commonly available: Procedures requiring masses of
mathematical operations could be executed in less than a second, complex
encryption algorithms appeared.

In modern cryptography there are two main kinds of encrypting and decrypting
a message. The first kind (which was actually also the first one that emerged)
is called _symmetric encryption_. This kind of cryptography uses the same key
for en- and decryption of a message. The previously mentioned substitution
cipher is a _symmetric encryption_, where the substitution table is the key
which is used for en- and decryption.

The other encryption kind is called _asymmetric encryption_. Here, en- and
decryption are seen as different operations. That's why one has to use an
encryption and a decryption key to perform _asymmetric encryption_.


A Cryptographic Protocol
------------------------

A cryptographic protocol is a combination of cryptographic primitives,
algorithms and possibly other cryptographic protocols. The protocol describes
how the cryptographic algorithms are used in order to increase confidentiality,
integrity and availablility of the underlying goal.

Cryptographic protocols are usually defined abstract in order to leave language
specific dificulties up to the implementation. Since only the interfaces are
defined, the developers can implement against those and therefore make sure
different implementations are compatible to each other.

###Diffie Hellmann

Cryptographic primitives
------------------------

The most basic building blocks in the field of cryptography are known as
cryptographic primitives. They include well researched, reliable and accepted
algorithms. Digital signatures, one-way has functions, as and public key
cryptography are examples for cryptographic primitives.
