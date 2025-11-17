import Image from "next/image";
import Header from "./_components/header";
import {
  PageContainer,
  PageSection,
  PageSectionScrollable,
  PageSectionTitle,
} from "./_components/ui/page";
import SearchInput from "./_components/search-input";
import banner from "../public/banner.png";
import BookingItem from "./_components/booking-item";
import { prisma } from "@/lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import Footer from "./_components/footer";

const Home = async () => {
  const recommendedBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div>
      <Header />

      <PageContainer>
        <SearchInput />

        <Image
          src={banner}
          alt="Agende agora!"
          sizes="100vw"
          className="h-auto w-full"
        />

        <PageSection>
          <PageSectionTitle>Agendamentos</PageSectionTitle>
          <BookingItem
            serviceName="Corte de Cabelo"
            barbershopName="Barbearia do João"
            barbershopImageUrl="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
            date={new Date()}
          />
        </PageSection>

        <PageSection>
          <PageSectionTitle>Recomendados</PageSectionTitle>
          <PageSectionScrollable>
            {recommendedBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScrollable>
        </PageSection>

        <PageSection>
          <PageSectionTitle>Populares</PageSectionTitle>
          <PageSectionScrollable>
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScrollable>
        </PageSection>
      </PageContainer>

      <Footer />
    </div>
  );
};

export default Home;
