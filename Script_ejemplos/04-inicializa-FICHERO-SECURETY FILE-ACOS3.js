/* SE INICIALIZA EL FICHERO SECURETY FILE
* SE COLOCAN LAS CLAVES   */

card = new Card();
//atr = card.reset(Card.RESET_COLD);
//print(atr);
print("");
print("PRESENTACION del IC para iniciar: ACOSTEST= 41434F53 54455354");
resp = card.plainApdu(new ByteString("80 20 07 00 08 41 43 4F 53 54 45 53 54", HEX));
print("C�digo SW: " + card.SW.toString(16));
print("");

//print("SE SELECCIONA EL FICHERO SECURETY FILE FF03");
resp = card.plainApdu(new ByteString("80 A4 00 00 02 FF 03", HEX));

print("          SECURETY FILE FF03");
// EL RECORD 0 NO SE ESCRIBE TIENE EL VALOR IC: 41 43 4F 53 54 45 53 54
//
// SE ESCRIBE EL RECORD 01 PIN: 30 31 32 33 34 35 36 37
resp = card.plainApdu(new ByteString("80 D2 01 00 08 30 31 32 33 34 35 36 37", HEX));
print("C�digo SW: " + card.SW.toString(16));
//
// SE ESCRIBE EL RECORD 02 Kc: DD DC DF DD DC DF DD DC
resp = card.plainApdu(new ByteString("80 D2 02 00 08 DD DC DF DD DC DF DD DC", HEX));
print("C�digo SW: " + card.SW.toString(16));
//
// SE ESCRIBE EL RECORD 03 Kt: 00 01 02 03 04 05 06 07
resp = card.plainApdu(new ByteString("80 D2 03 00 08 00 01 02 03 04 05 06 07", HEX));
print("C�digo SW: " + card.SW.toString(16));
//
// SE ESCRIBE EL RECORD 04 RNDc: AB 8A 7C 6D 2D 88 81 18
resp = card.plainApdu(new ByteString("80 D2 04 00 08 AB 8A 7C 6D 2D 88 81 18", HEX));
print("C�digo SW: " + card.SW.toString(16));
//
// SE ESCRIBE EL RECORD 05 AC1: AC 11 AC 11 AC 11 AC 11 AC 11
resp = card.plainApdu(new ByteString("80 D2 05 00 08 AC 11 AC 11 AC 11 AC 11", HEX));
print("C�digo SW: " + card.SW.toString(16));
//
// SE ESCRIBE EL RECORD 06 AC2: AC 22 AC 22 AC 22 AC 22 AC 22
resp = card.plainApdu(new ByteString("80 D2 06 00 08 AC 22 AC 22 AC 22 AC 22", HEX));
print("C�digo SW: " + card.SW.toString(16));
//
// SE ESCRIBE EL RECORD 07 AC3: AC 33 AC 33 AC 33 AC 33 AC 33
resp = card.plainApdu(new ByteString("80 D2 07 00 08 AC 33 AC 33 AC 33 AC 33", HEX));
print("C�digo SW: " + card.SW.toString(16));
//
// SE ESCRIBE EL RECORD 08 AC4: AC 44 AC 44 AC 44 AC 44 AC 44
resp = card.plainApdu(new ByteString("80 D2 08 00 08 AC 44 AC 44 AC 44 AC 44", HEX));
print("C�digo SW: " + card.SW.toString(16));
//
// SE ESCRIBE EL RECORD 09 AC5: AC 55 AC 55 AC 55 AC 55 AC 55
resp = card.plainApdu(new ByteString("80 D2 09 00 08 AC 55 AC 55 AC 55 AC 55", HEX));
print("C�digo SW: " + card.SW.toString(16));
//
// EL RECORD 0A NO SE TOCA
resp = card.plainApdu(new ByteString("80 D2 0A 00 08 00 00 00 00 00 00 00 00", HEX));
print("C�digo SW: " + card.SW.toString(16));
// EL RECORD 0B NO SE TOCA
//
// SE ESCRIBE EL RECORD 0C Kc(RIGHT HALF): DD DC DF DD DC DF DD DC
resp = card.plainApdu(new ByteString("80 D2 0C 00 08 DD DC DF DD DC DF DD DC", HEX));
print("C�digo SW: " + card.SW.toString(16));
//
// SE ESCRIBE EL RECORD 0D Kt(RIGHT HALF): 00 01 02 03 04 05 06 07
resp = card.plainApdu(new ByteString("80 D2 0D 00 08 00 01 02 03 04 05 06 07", HEX));
print("C�digo SW: " + card.SW.toString(16));
//


card.close();
