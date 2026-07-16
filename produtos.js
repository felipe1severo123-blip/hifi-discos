const bancoDeProdutos  = [
{ id: 1, titulo: "CD Celebridade - Nacional e Internacional (Vol. 1 e 2)", artista: "Vários Artistas (Trilha Sonora da Novela da Rede Globo)", ano: "2003", preco: "R$ 169,00", categoria: "cd", peso: 450, estado: "EE", capa: "fotos/prod-1-frente.jpeg", verso: "fotos/prod-1-verso.jpeg" },
{ id: 2, titulo: "CD O Melhor das Novelas Internacional Vol. 3", artista: "Vários Artistas (Trilha Sonora da Novela da Rede Globo)", ano: "2010", preco: "R$ 79,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-2-frente.jpeg", verso: "fotos/prod-2-verso.jpeg" },
{ id: 3, titulo: "CD Canavial de Paixões - Trilha Sonora Original da Novela", artista: "Vários Artistas (Trilha Sonora da Novela da Rede Globo)", ano: "2003", preco: "R$ 129,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-3-frente.jpeg", verso: "fotos/prod-3-verso.jpeg" },
{ id: 4, titulo: "CD Beleza Pura Internacional - Trilha Sonora da Novela", artista: "Vários Artistas (Trilha Sonora da Novela da Rede Globo)", ano: "2008", preco: "R$ 129,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-4-frente.jpeg", verso: "fotos/prod-4-verso.jpeg" },
{ id: 5, titulo: "CD Quatro por Quatro Internacional - Trilha Sonora da Novela", artista: "Vários Artistas (Trilha Sonora da Novela da Rede Globo)", ano: "1995", preco: "R$ 149,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-5-frente.jpeg", verso: "fotos/prod-5-verso.jpeg" },
{ id: 6, titulo: "CD Jon Secada - Heart, Soul & a Voice", artista: "Jon Secada", ano: "1994", preco: "R$ 79,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-6-frente.jpeg", verso: "fotos/prod-6-verso.jpeg" },
{ id: 7, titulo: "CD Jorge Aragão - Ao Vivo 2", artista: "Jorge Aragão", ano: "2000", preco: "R$ 79,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-7-frente.jpeg", verso: "fotos/prod-7-verso.jpeg" },
{ id: 8, titulo: "CD Hanson - This Time Around", artista: "Hanson", ano: "2000", preco: "R$ 79,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-8-frente.jpeg", verso: "fotos/prod-8-verso.jpeg" },
{ id: 9, titulo: "CD Legião Urbana - Mais do Mesmo (Os Maiores Sucessos)", artista: "Legião Urbana", ano: "1998", preco: "R$ 129,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-9-frente.jpeg", verso: "fotos/prod-9-verso.jpeg" },
{ id: 10, titulo: "CD Passione Internacional - Trilha Sonora da Novela", artista: "Vários Artistas", ano: "2010", preco: "R$ 129,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-10-frente.jpeg", verso: "fotos/prod-10-verso.jpeg" },
{ id: 11, titulo: "CD América Internacional - Trilha Sonora da Novela", artista: "Vários Artistas", ano: "2005", preco: "R$ 129,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-11-frente.jpeg", verso: "fotos/prod-11-verso.jpeg" },
{ id: 12, titulo: "CD JK - Trilha Sonora da Minissérie", artista: "Vários Artistas", ano: "2006", preco: "R$ 129,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-12-frente.jpeg", verso: "fotos/prod-12-verso.jpeg" },
{ id: 13, titulo: "CD Vira Lata Internacional - Trilha Sonora da Novela", artista: "Vários Artistas", ano: "1996", preco: "R$ 129,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-13-frente.jpeg", verso: "fotos/prod-13-verso.jpeg" },
{ id: 14, titulo: "CD O Beijo do Vampiro Internacional - Trilha Sonora da Novela", artista: "Vários Artistas", ano: "2002", preco: "R$ 129,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-14-frente.jpeg", verso: "fotos/prod-14-verso.jpeg" },
{ id: 15, titulo: "CD Esplendor - Trilha Sonora da Novela", artista: "Vários Artistas", ano: "2000", preco: "R$ 129,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-15-frente.jpeg", verso: "fotos/prod-15-verso.jpeg" },
{ id: 16, titulo: "CD Joanna Canta - Lupicínio", artista: "Joanna", ano: "2000", preco: "R$ 79,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-16-frente.jpeg", verso: "fotos/prod-16-verso.jpeg" },
{ id: 17, titulo: "CD Nana Mouskouri - The Magic of Nana Mouskouri", artista: "Nana Mouskouri", ano: "1988", preco: "R$ 79,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-17-frente.jpeg", verso: "fotos/prod-17-verso.jpeg" },
{ id: 18, titulo: "CD Nelly - Nellyville", artista: "Nelly", ano: "2002", preco: "R$ 129,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-18-frente.jpeg", verso: "fotos/prod-18-verso.jpeg" },
{ id: 19, titulo: "CD Geraldo Vandré - Convite para Ouvir", artista: "Geraldo Vandré", ano: "1997", preco: "R$ 79,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-19-frente.jpeg", verso: "fotos/prod-19-verso.jpeg" },
{ id: 20, titulo: "CD Garotos de Ouro - Ao Vivo", artista: "Garotos de Ouro", ano: "2012", preco: "R$ 129,90", categoria: "cd", peso: 300, estado: "LAC", capa: "fotos/prod-20-frente.jpeg", verso: "fotos/prod-20-verso.jpeg" },
{ id: 21, titulo: "CD Kid Abelha - Pega Vida", artista: "Kid Abelha", ano: "2005", preco: "R$ 79,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-21-frente.jpeg", verso: "fotos/prod-21-verso.jpeg" },
{ id: 22, titulo: "CD Genesis - Turn It On Again: The Hits", artista: "Genesis", ano: "1999", preco: "R$ 169,90", categoria: "cd", peso: 300, estado: "LAC", capa: "fotos/prod-22-frente.jpeg", verso: "fotos/prod-22-verso.jpeg" },
{ id: 23, titulo: "CD Black Sabbath - Technical Ecstasy", artista: "Black Sabbath", ano: "1976", preco: "R$ 139,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-23-frente.jpeg", verso: "fotos/prod-23-verso.jpeg" },
{ id: 24, titulo: "CD Francis Hime - Passaredo", artista: "Francis Hime", ano: "1977", preco: "R$ 79,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-24-frente.jpeg", verso: "fotos/prod-24-verso.jpeg" },
{ id: 25, titulo: "CD Restart - Geração Z", artista: "Restart", ano: "2011", preco: "R$ 79,90", categoria: "cd", peso: 300, estado: "LAC", capa: "fotos/prod-25-frente.jpeg", verso: "fotos/prod-25-verso.jpeg" },
{ id: 26, titulo: "CD Albert & Junior - Albert & Junior", artista: "Albert & Junior", ano: "1995", preco: "R$ 79,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-26-frente.jpeg", verso: "fotos/prod-26-verso.jpeg" },
{ id: 27, titulo: "CD Vitor Ramil - Ramilonga", artista: "Vitor Ramil", ano: "1997", preco: "R$ 129,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-27-frente.jpeg", verso: "fotos/prod-27-verso.jpeg" },
{ id: 28, titulo: "CD Fats Domino - The Best of Fats Domino", artista: "Fats Domino", ano: "1993", preco: "R$ 79,90", categoria: "cd", peso: 300, estado: "EE", capa: "fotos/prod-28-frente.jpeg", verso: "fotos/prod-28-verso.jpeg" },














];