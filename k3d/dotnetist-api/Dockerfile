# Use the .NET 8 ASP.NET image for the base layer
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

# Use the .NET 8 SDK for the build environment
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["dotnetist-api.csproj", "."]
RUN dotnet restore "dotnetist-api.csproj"

COPY . .
WORKDIR "/src"
RUN dotnet build "dotnetist-api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "dotnetist-api.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Use the ASP.NET image again for the final stage
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "dotnetist-api.dll"]
