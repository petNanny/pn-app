import { Box, Text, Icon } from "@chakra-ui/react";
import {
  ServiceTitle,
  ServiceContainer,
  ServiceIconBox,
  ServiceDescContainer,
  ServiceDescContentBox,
  ServicePriceBox,
  AdditionalServiceBox,
  AdditionalServiceIcon,
  AdditionalServiceText,
} from "./styledPetSitterServices";
import homeDogBoarding from "../../../../assets/Icons/homeDogBoarding.svg";
import doggyDayCare from "../../../../assets/Icons/doggyDayCare.svg";
import dogWalking from "../../../../assets/Icons/dogWalking.svg";
import homeVisits from "../../../../assets/Icons/homeVisits.svg";
import houseSitting from "../../../../assets/Icons/houseSitting.svg";
import {
  MdDirectionsCar,
  MdVisibility,
  MdElectricCar,
  MdMedicalServices,
  MdContentCut,
  MdPets,
} from "react-icons/md";

interface PetSitterServicesValues {
  petSitterServices: [
    {
      service: string;
      serviceDesc: string;
      Rate: number;
      RateForAddition: number;
      isActive: boolean;
    }
  ];
  petSitterAdditionalServices: any;
  petSitterName: string;
}

const PetSitterServices = ({
  petSitterServices,
  petSitterAdditionalServices,
  petSitterName,
}: PetSitterServicesValues) => {
  if (!petSitterServices) return <div>services not available</div>;
  const serviceNames = [
    "Dog boarding",
    "Doggy day care",
    "Dog walking",
    "Home visits",
    "House sitting",
  ];
  const services = serviceNames.map((serviceName) =>
    petSitterServices.find((service) => service.service === serviceName)
  );
  const atPetSitterHomeServices = services.slice(0, 2);
  const atPetOwnerHomeServices = services.slice(2, 5);
  const noServices = services.every((service) => service === undefined);

  const additionalServicesNames = [
    "PickUp",
    "Supervision",
    "EmergeTransport",
    "OralMedication",
    "InjectedMedication",
    "FirstAid",
    "Grooming",
    "DogTraining",
  ];

  console.log("perSitterAdditionalServices: ", petSitterAdditionalServices);

  return (
    <>
      <Box marginBottom="1rem">
        <Box marginBottom="1rem">
          {noServices && <Text>Services not available</Text>}
          {atPetSitterHomeServices[0] || atPetSitterHomeServices[1] ? (
            <ServiceTitle as="h3">At the sitter&apos;s home</ServiceTitle>
          ) : null}
          {atPetSitterHomeServices[0] ? (
            <ServiceContainer>
              <ServiceIconBox>
                <img width="24px" src={homeDogBoarding} alt="home dog boarding" />
              </ServiceIconBox>
              <ServiceDescContainer>
                <Text color="rgb(116, 116, 116)">Dog Boarding</Text>
                <ServiceDescContentBox>
                  <Text fontSize="0.9rem" color="rgb(116, 116, 116)">
                    Overnight stay at the sitter&apos;s home
                  </Text>
                  {atPetSitterHomeServices[0].RateForAddition ? (
                    <Text fontSize="0.9rem" color="rgb(116, 116, 116)">
                      {atPetSitterHomeServices[0].RateForAddition} AUD for each additional pet
                    </Text>
                  ) : null}
                </ServiceDescContentBox>
              </ServiceDescContainer>
              {atPetSitterHomeServices[0].Rate ? (
                <ServicePriceBox>
                  <Text>{atPetSitterHomeServices[0].Rate} AUD</Text>
                  <Box>
                    <span>/</span> <span>night</span>
                  </Box>
                </ServicePriceBox>
              ) : null}
            </ServiceContainer>
          ) : null}
          {atPetSitterHomeServices[1] ? (
            <ServiceContainer>
              <ServiceIconBox>
                <img width="24px" src={doggyDayCare} alt="doggy day care" />
              </ServiceIconBox>
              <ServiceDescContainer>
                <Text color="rgb(116, 116, 116)">Doggy Day Care</Text>
                <ServiceDescContentBox>
                  <Text fontSize="0.9rem" color="rgb(116, 116, 116)">
                    Daytime care for your dog at the sitter&apos;s home
                  </Text>
                  {atPetSitterHomeServices[1].RateForAddition ? (
                    <Text fontSize="0.9rem" color="rgb(116, 116, 116)">
                      {atPetSitterHomeServices[1].RateForAddition} AUD for each additional pet
                    </Text>
                  ) : null}
                </ServiceDescContentBox>
              </ServiceDescContainer>
              {atPetSitterHomeServices[1].Rate ? (
                <ServicePriceBox>
                  <Text>{atPetSitterHomeServices[1].Rate} AUD</Text>
                  <Box>
                    <span>/</span> <span>day</span>
                  </Box>
                </ServicePriceBox>
              ) : null}
            </ServiceContainer>
          ) : null}
        </Box>
        <Box marginBottom="1rem">
          {atPetOwnerHomeServices[0] || atPetOwnerHomeServices[1] || atPetOwnerHomeServices[2] ? (
            <ServiceTitle as="h3">At your home</ServiceTitle>
          ) : null}
          {atPetOwnerHomeServices[0] ? (
            <ServiceContainer>
              <ServiceIconBox>
                <img width="24px" src={dogWalking} alt="dog walking" />
              </ServiceIconBox>
              <ServiceDescContainer>
                <Text color="rgb(116, 116, 116)">Dog Walking</Text>
                <ServiceDescContentBox>
                  <Text fontSize="0.9rem" color="rgb(116, 116, 116)">
                    An experienced dog walker will pick up your dog from your home for a 30 min walk
                  </Text>
                  {atPetOwnerHomeServices[0].RateForAddition ? (
                    <Text fontSize="0.9rem" color="rgb(116, 116, 116)">
                      {atPetOwnerHomeServices[0].RateForAddition} AUD for each additional pet
                    </Text>
                  ) : null}
                </ServiceDescContentBox>
              </ServiceDescContainer>
              {atPetOwnerHomeServices[0].Rate ? (
                <ServicePriceBox>
                  <Text>{atPetOwnerHomeServices[0].Rate} AUD</Text>
                  <Box>
                    <span>/</span> <span>walk</span>
                  </Box>
                </ServicePriceBox>
              ) : null}
            </ServiceContainer>
          ) : null}
          {atPetOwnerHomeServices[1] ? (
            <ServiceContainer>
              <ServiceIconBox>
                <img width="24px" src={homeVisits} alt="home visits" />
              </ServiceIconBox>
              <ServiceDescContainer>
                <Text color="rgb(116, 116, 116)">Home Visits</Text>
                <ServiceDescContentBox>
                  <Text fontSize="0.9rem" color="rgb(116, 116, 116)">
                    Book a pet sitter to stop by your home to feed and play with your dog
                  </Text>
                </ServiceDescContentBox>
              </ServiceDescContainer>
              {atPetOwnerHomeServices[1].Rate ? (
                <ServicePriceBox>
                  <Text>{atPetOwnerHomeServices[1].Rate} AUD</Text>
                  <Box>
                    <span>/</span> <span>day</span>
                  </Box>
                </ServicePriceBox>
              ) : null}
            </ServiceContainer>
          ) : null}
          {atPetOwnerHomeServices[2] ? (
            <ServiceContainer>
              <ServiceIconBox>
                <img width="24px" src={houseSitting} alt="house sitting" />
              </ServiceIconBox>
              <ServiceDescContainer>
                <Text color="rgb(116, 116, 116)">House Sitting</Text>
                <ServiceDescContentBox>
                  <Text fontSize="0.9rem" color="rgb(116, 116, 116)">
                    A sitter stays overnight in your home and cares for your pet
                  </Text>
                </ServiceDescContentBox>
              </ServiceDescContainer>
              {atPetOwnerHomeServices[2].Rate ? (
                <ServicePriceBox>
                  <Text>{atPetOwnerHomeServices[2].Rate} AUD</Text>
                  <Box>
                    <span>/</span> <span>night</span>
                  </Box>
                </ServicePriceBox>
              ) : null}
            </ServiceContainer>
          ) : null}
        </Box>
        <Box marginBottom="1rem">
          {petSitterAdditionalServices.length === 0 ? null : (
            <ServiceTitle as="h3">{petSitterName} also offers</ServiceTitle>
          )}
          {petSitterAdditionalServices.includes("PickUp") ? (
            <AdditionalServiceBox>
              <AdditionalServiceIcon as={MdDirectionsCar} />
              <AdditionalServiceText>Pick up / drop off</AdditionalServiceText>
            </AdditionalServiceBox>
          ) : null}
          {petSitterAdditionalServices.includes("Supervision") ? (
            <AdditionalServiceBox>
              <AdditionalServiceIcon as={MdVisibility} />
              <AdditionalServiceText>Constant supervision</AdditionalServiceText>
            </AdditionalServiceBox>
          ) : null}
          {petSitterAdditionalServices.includes("EmergeTransport") ? (
            <AdditionalServiceBox>
              <AdditionalServiceIcon as={MdElectricCar} />
              <AdditionalServiceText>Emergency transport</AdditionalServiceText>
            </AdditionalServiceBox>
          ) : null}
          {petSitterAdditionalServices.includes("OralMedication") ? (
            <AdditionalServiceBox>
              <AdditionalServiceIcon as={MdMedicalServices} />
              <AdditionalServiceText>I can administer oral medications</AdditionalServiceText>
            </AdditionalServiceBox>
          ) : null}
          {petSitterAdditionalServices.includes("InjectedMedication") ? (
            <AdditionalServiceBox>
              <AdditionalServiceIcon as={MdMedicalServices} />
              <AdditionalServiceText>I can administer injected medications</AdditionalServiceText>
            </AdditionalServiceBox>
          ) : null}
          {petSitterAdditionalServices.includes("FirstAid") ? (
            <AdditionalServiceBox>
              <AdditionalServiceIcon as={MdMedicalServices} />
              <AdditionalServiceText>First Aid and CPR for pets</AdditionalServiceText>
            </AdditionalServiceBox>
          ) : null}
          {petSitterAdditionalServices.includes("Grooming") ? (
            <AdditionalServiceBox>
              <AdditionalServiceIcon as={MdContentCut} />
              <AdditionalServiceText>Grooming</AdditionalServiceText>
            </AdditionalServiceBox>
          ) : null}
          {petSitterAdditionalServices.includes("DogTraining") ? (
            <AdditionalServiceBox>
              <AdditionalServiceIcon as={MdPets} />
              <AdditionalServiceText>Dog training</AdditionalServiceText>
            </AdditionalServiceBox>
          ) : null}
          {/* {additionalServicesNames.map((service) => (
            petSitterAdditionalServices.includes(service) ? (
              <Box key={service}>{service}</Box>
            ) : null
          ))} */}
        </Box>
      </Box>
    </>
  );
};

export default PetSitterServices;
